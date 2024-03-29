class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "Not authenticated", status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by!(id: params[:id])
        if user
            user.destroy
            head :no_content
        else
            render json: "User does not exist", status: :not_found
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
