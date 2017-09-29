class Api::V1::ReviewsController < ApplicationController
  def new
    @venue = Venue.find(params[:venue_id])
    @review = Review.new
  end
  def create
    @review = Review.create(review_params)
    @review.venue = @venue
  end

  private
  def review_params
    params.require(:review).permit(:title, :rating, :content)
  end
end
