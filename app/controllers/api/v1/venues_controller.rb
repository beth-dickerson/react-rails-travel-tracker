class Api::V1::VenuesController < ApplicationController
    skip_before_action :verify_authenticity_token
  def index
      @venues = Venue.all
      render json: @venues
  end

  def show
    @venue = Venue.find(params[:id])
    @reviews = @venue.reviews
    render json: { venue: @venue, reviews: @venue.reviews }
  end


  def new
    @venue = Venue.new
    render json: @venue
  end

  def create
    data = JSON.parse(request.body.read)
    @venue = Venue.create(name: data["venue"]["name"], address: data["venue"]["address"], phone: data["venue"]["phone"], url: data["venue"]["url"], photo: data["venue"]["photo"])
    render json: @venue
    #read the data
    #persist the goal with the read data
    #use the current_user to save the goal's user
    #return the json of the newly created goal
  end

  def update
    @venue = Venue.find(params[:id])
    @venue.update_attributes(venue_params)
    render json: @venue
  end

  def destroy
    @venue = Venue.find(params[:id])
    if @venue.destroy
      head :no_content, status: :ok
    else
      render json: @venue.errors, status: :unprocessable_entity
    end
  end

  private

  def venue_params
    params.require(:venue).permit(:name, :address, :phone, :url, :photo)
  end

end
