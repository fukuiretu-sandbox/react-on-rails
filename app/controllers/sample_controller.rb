class SampleController < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: { sample: 'sampleです' } }
    end
  end
end
