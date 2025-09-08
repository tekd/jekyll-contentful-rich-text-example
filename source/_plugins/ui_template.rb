require_relative './markdownify_yaml.rb'

module UITemplate
  include MarkdownifyYAML

  def create_figure_html(figure_id, title, image_url, image_description, caption)
    "<div class=\"figure\">
      <p class=\"figure__title\">#{title}</p>
      <img id=#{figure_id} class=\"figure__image\" src=#{image_url} alt=\"#{image_description.gsub(/"/,"'")}\" />
      <div class=\"figure__caption\">#{markdownify_yaml(caption)}</div>
    </div>"
  end

  def create_table(title, body, caption)
    "<div class=\"table\">
      <p class=\"table__title\">#{title}</p>
      <div class=\"table__body\">#{markdownify_yaml(body)}</div>
      <div class=\"table__caption\">#{markdownify_yaml(caption)}</div>
    </div>"
  end

  def create_button_link(title, url)
    "<a class=\"button\" href=\"#{url}\">
      #{title}
    </a>"
  end

  def create_figure_link(title, url)
    "<a class=\"link\" href=\"#{url}\">#{title}</a>"
  end
  
end
