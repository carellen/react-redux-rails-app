module Company
  class ManageController < ApplcationController

    def index
      render json: Company.all
    end

    def create
      company = Company.create(company_params)
      render json: company
    end

    def destroy
      Company.destroy(params[:id])
    end

    def update
      company = company.find(params[:id])
      company.update_attributes(company_params)
      render json: company
    end

    private

    def company_params
      params.require(:company).permit(:id, :name, :info)
    end
  end
end
