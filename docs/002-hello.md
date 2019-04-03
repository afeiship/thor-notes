# hello
> Everyone like `hello world`.

## code
```rb
require "thor"

class MyCLI < Thor
  desc "hello NAME", "say hello to NAME"
  option :from

  def hello(name)
    puts "Hello #{name}, from - #{options[:from]}"
  end
end

MyCLI.start(ARGV)
```

## usage
```shell
ruby src/cli.rb hello afei --from=cmd
```
