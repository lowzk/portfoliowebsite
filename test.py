from PIL import Image

# Open the image file
image = Image.open("./public/lzk_coffee.png")

# Get the color of the top left pixel
color = image.getpixel((0, 0))

# Make all pixels of that color transparent
pixels = image.load()
for x in range(image.width):
    for y in range(image.height):
        if pixels[x, y] == color:
            pixels[x, y] = (0, 0, 0, 0)

# Save the modified image
image.save("./public/lzk_coffee.png")