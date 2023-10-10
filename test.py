from PIL import Image

# Open the image
image = Image.open("./public/navbar_icon.png")

# Get the color of the top left pixel
color = image.getpixel((0, 0))

# Create a new image with a transparent background
transparent_image = Image.new("RGBA", image.size, (0, 0, 0, 0))

# Loop through each pixel in the image
for x in range(image.width):
    for y in range(image.height):
        # Get the color of the current pixel
        pixel_color = image.getpixel((x, y))
        
        # If the color of the current pixel matches the color of the top left pixel
        if pixel_color == color:
            # Set the pixel in the transparent image to transparent
            transparent_image.putpixel((x, y), (0, 0, 0, 0))
        else:
            # Set the pixel in the transparent image to the color of the current pixel
            transparent_image.putpixel((x, y), pixel_color)

# Save the resulting image
transparent_image.save("./public/navbar_icon.png")
