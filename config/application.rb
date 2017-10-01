require_relative 'boot'

require 'rails/all'

require 'dotenv'
Dotenv.load

require 'dotenv/tasks'
task mytask: :dotenv do
    # things that require .env
end

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

Dotenv::Railtie.load

HOSTNAME = ENV['HOSTNAME']

module ReactRailsTravelTracker
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
