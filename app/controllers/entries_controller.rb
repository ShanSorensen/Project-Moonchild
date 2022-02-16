class EntriesController < ApplicationController
    def index
        render json: Entry.all, status: :ok
    end

    def create
        entry = Entry.create!(entry_params)
        render json: entry, status: :created
    end

    def destroy
        entry = Entry.find_by!(id: params[:id])
        if entry
            entry.destroy
            head :no_content
        else
            render json: "Entry does not exist", status: :not_found
        end
    end

    private

    def entry_params
        params.permit(:user_id, :title, :body)
    end
end
