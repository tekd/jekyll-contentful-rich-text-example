require 'rich_text_renderer'
require_relative './ui_template.rb'
require 'byebug'

class EmbeddedInlineEntryRenderer < RichTextRenderer::BaseNodeRenderer
  include UITemplate

  def render(node)
    entry = node['data']['target']
    case entry['sys']['content_type_id']
      when 'figure'
        title = entry['title']
        url = entry['image']['url']
        create_figure_link(title, url)
      else
        puts "Can't render embedded entry"
    end
  end
end

class CreateFootnotesPanel < RichTextRenderer::BaseNodeRenderer
  include UITemplate

  def render(node)
    entry = node['data']['target']

    case entry['sys']['content_type_id']
      when 'footnote'
        footnote_id = entry['sys']['id']
        footnote_body = entry['body']
        create_footnotes_panel(footnote_body, footnote_id)
      else
        puts "Can't render embedded entry"
    end
  end
end

class EmbeddedEntryRenderer < RichTextRenderer::BaseNodeRenderer
  include UITemplate
  def render(node)
    entry = node['data']['target']
    case entry['sys']['content_type_id']
      when 'figure'
        figure_id = entry['image']['sys']['id']
        title =  entry['title']
        caption = entry['caption']
        image_description = entry['image']['description'] || ''
        image_url = entry['image']['url']
        create_figure_html(figure_id, title, image_url, image_description, caption)
      when 'table'
        title = entry['title']
        body = entry['body']
        caption = entry['caption']
        create_table(title, body, caption)
      when 'button'
        title = entry['button_title']
        url = entry['button_url']
        create_button_link(title, url)
    end
  end
end

class EmbeddedAssetRenderer < RichTextRenderer::BaseNodeRenderer
  def render(node)
    entry = node['data']['target']
    "<img id=#{entry['title']} class=\"figure__image\" src=#{entry['url']} alt=\"#{entry['description']}\" />"
  end
end

class SilentNullRenderer < RichTextRenderer::BaseNodeRenderer
  def render(node)
    ""
  end
end

class HeadingRenderer < RichTextRenderer::BaseNodeRenderer
  include Jekyll::Filters
  
  def render(node)
    map_header_tag = {
      'heading-1' => 'h1', 
      'heading-2' => 'h2', 
      'heading-3' => 'h3', 
      'heading-4' => 'h4', 
    }
    heading_type = node['nodeType']
    header_tag = map_header_tag[heading_type]
    heading_value = node['content'][0]['value']
    "<#{header_tag} class=\"heading\" id=#{slugify(heading_value)}>#{heading_value}</#{header_tag}>"
  end
end

module Jekyll
  module DataFormatter
    def rich_text_to_html(content)
      renderer = RichTextRenderer::Renderer.new(
        nil => SilentNullRenderer, 
        'embedded-entry-inline' => EmbeddedInlineEntryRenderer, 
        'embedded-entry-block' => EmbeddedEntryRenderer,
        'embedded-asset-block' => EmbeddedAssetRenderer,
        'heading-1' => HeadingRenderer,
        'heading-2' => HeadingRenderer,
        'heading-3' => HeadingRenderer,
        'heading-4' => HeadingRenderer,
        )
      renderer.render(content)
    end
  end
end

Liquid::Template.register_filter(Jekyll::DataFormatter)