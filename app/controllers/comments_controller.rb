class CommentsController < ApplicationController
  before_action :get_article_and_comments
  before_action :authenticate_user!, only: :create

  respond_to :html, :json

  def index
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.article = @article #sets the article assoc (foreignkey)
    @comment.user = current_user

    @comment.save
    respond_with(@comment)
  end

  private

  def comment_params
    params.require(:comment).permit(:body)

    # :body => requestObj
    # params[:body]
    # requestObj
  end

  def get_article_and_comments
    @article = Article.find(params[:article_id])
    @comments = @article.comments.order(score: :desc)
  end
end
