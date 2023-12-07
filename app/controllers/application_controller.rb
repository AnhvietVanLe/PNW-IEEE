class ApplicationController < ActionController::Base
	layout :set_layout

	private

	def set_layout
		if current_user&.admin?
			# if current_user && current_user.admin?
			# Ensures you won't error if not logged in when check if admin
			"application"
		else
			"application"
		end
	end
end
