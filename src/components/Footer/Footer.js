import React from 'react'

function Footer() {
    return (
        <div>
           

            
            <footer class=" border-footer bg-footer text-white mt-5 p-4 text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5>About Us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
                        </div>
                        <div class="col-md-4">
                            <h5>Contact</h5>
                            <p>Email: info@example.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                        <div class="col-md-4">
                            <h5>Follow Us</h5>
                            <a href="#" class="text-white me-2">Facebook</a>
                            <a href="#" class="text-white me-2">Twitter</a>
                            <a href="#" class="text-white">Instagram</a>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    &copy; 2024 Your Company. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer