<?php include"header.php" ?>
    
    <section class="trading_articales_wrapper login_signup_wrapper">
    	<div class="container">
        	<div class="row">
            	<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 h1_heading my_profile_page">
                    <div class="profile_both_holder">
                    	<div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-4 profile_img_edit">
                                <div class="profile_img_holder">
                                    <div>
                                        <img src="images/profile.jpg" alt="Profile">
                                    </div>
                                    <form>
                                    	<input id="change_profile" style="display: none;" type="file">
                                    	<button type="button" class="change_profile" onclick="document.getElementById('change_profile').click();">Change Profile Photo</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-8 profile_details_edit">
                            	<div class="my_profile_your_details_holder">
                                    <ul class="my_profile_your_details">
                                        <li><span>Name :</span><strong>Sudipta Saxena</strong></li>
                                        <li><span>Email Id :</span><strong>demosudiptasaxena@gmail.com</strong></li>
                                        <li><span>Mobile :</span><strong>999 XXX 333 XX</strong></li>	
                                        <li><span>Country :</span><strong>India</strong></li>
                                        <li><span>City :</span><strong>Kolkata</strong></li>
                                    </ul>
                                    <button type="button" class="view_full edit_profile">Edit your Profile</button>
                                </div>
                                <div class="login_signup_page my_profile_your_details_holder_edit_mode" style="display:none;">
                                	<form>
                                          <div class="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                              <input type="text" class="form-control" placeholder="Sudipta Saxena">
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                                            <div class="col-sm-10">
                                              <input type="email" class="form-control" placeholder="demosudiptasaxena@gmail.com">
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Mobile</label>
                                            <div class="col-sm-10">
                                              <input type="tel" class="form-control" placeholder="999 XXX 333 XX">
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Country</label>
                                            <div class="col-sm-10">
                                            	<div class="triangel_arrow">
                                                  <select class="form-control">
                                                    <option value="India">India</option>
                                                    <option value="India">India</option>
                                                    <option value="India">India</option>
                                                    <option value="India">India</option>
                                                    <option value="India">India</option>
                                                  </select>
                                                  </div>
                                            	</div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">City</label>
                                            <div class="col-sm-10">
                                              <input type="text" class="form-control" placeholder="Kolkata">
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <div class="col-sm-12"><input type="submit" value="Submit" class="view_full after_edit_form"></div>
                                          </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
	<?php include"footer.php" ?>