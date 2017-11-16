class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      respond_to do |format|
        format.html do
          if request.xhr?
            render partial: 'tweet', locals: { tweet: @tweet }
          else
            redirect_to root_url
          end
        end

        format.json { render json: @tweet }
      end
    end   
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
