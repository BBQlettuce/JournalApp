class PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def new
    @post = Post.new

    render json: @post
  end

  def show
    @post = Post.find(params[:id])

    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])

    @post.destroy

    render json: @post
  end

  def update
    @post = Post.find(params[:id])

    @post.update(post_params)

    if @post.save
      render json: @post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
