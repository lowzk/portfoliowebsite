from PIL import Image, ImageDraw, ImageFilter

def apply_soft_edges(input_image_path, output_image_path, border_radius=30):
    # Open the original image
    original = Image.open(input_image_path).convert("RGBA")
    
    # Create a blank white RGBA image
    white_img = Image.new("RGBA", original.size, (255, 255, 255, 255))
    
    # Use alpha transparency to create a mask with soft edges
    mask = Image.new("L", original.size, 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.ellipse(
        (0, 0, original.size[0], original.size[1]),
        fill=255,
    )
    
    # Blur the mask to get the soft edges
    mask = mask.filter(ImageFilter.GaussianBlur(border_radius))
    
    # Composite the original image and the white image using the mask
    soft_edge_image = Image.composite(original, white_img, mask)
    
    # Save the resulting image
    soft_edge_image.save(output_image_path)


# Test the function
apply_soft_edges("./public/cpf_team.jpeg", "output.png")
