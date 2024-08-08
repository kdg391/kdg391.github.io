require "open3"

module Jekyll
  class ShikiHighlightBlock < Liquid::Block
    def initialize(tag_name, lang, tokens)
      super
      @lang = lang.strip
    end

    def render(context)
      code = super
      output = ""
      Open3.popen2("node", "shiki-highliter.mjs", @lang) do |stdin, stdout, wait_thr|
        stdin.write(code)
        stdin.close
        output = stdout.read
      end
      output
    end
  end
end

Liquid::Template.register_tag("shiki", Jekyll::ShikiHighlightBlock)