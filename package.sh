# Package the contents of the distrib folder for delivery.
# Assumes you already have the distrib folder up to date.
#
rm ./distrib/RH-TopChef.zip
zip -r -X ./distrib/RH-TopChef.zip ./distrib/ -x "*.zip" -x "*.DS_Store"

