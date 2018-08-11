# install to system:
thor -h
```conf
Commands:
  thor help [COMMAND]  # Describe available commands or one specific command
  thor install NAME    # Install an optionally named Thor file into your system commands
  thor installed       # List the installed Thor modules and commands
  thor list [SEARCH]   # List the available thor commands (--substring means .*SEARCH)
  thor uninstall NAME  # Uninstall a named Thor module
  thor update NAME     # Update a Thor file from its original location
  thor version         # Show Thor version
```

## install your cli.rb
thor install ./src/cli.rb

## check:
thor list