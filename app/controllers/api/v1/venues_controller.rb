class Api::V1::VenuesController < ApplicationController
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
      @venue = Venue.create(venue_params)
      render json: @venue
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
