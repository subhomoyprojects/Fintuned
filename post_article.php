<?php include"header.php" ?>
	
    <section class="trading_articales_wrapper">
    	<div class="container">
			<div class="row">
            	<div class="col-xs-12 col-sm-8 post_article">
                	<div class="h1_heading post_article_holder">
                    	<h1>Add Article title</h1>
                        <form>
                        	<input type="text" placeholder="Enter article title here">
                        </form>
                        <div class="tips_holder">
                        	<p>Title should be compelling, succinct, and accurately reflect your main investment idea.</p>
							<p>Sensational and/or bombastic titles will be rejected. Avoid name-dropping as well.</p>
                        </div>
                    </div>
                    <div class="margin_top_40 h1_heading post_article_holder">
                    	<h1>Add Article Summary</h1>
                        <textarea name="editor" id="editor"></textarea>
                        <div class="tips_holder">
                        	<p>Each bullet cannot exceed 30 words and cannot contain any special formatting. Full sentences are most effective.</p>
							<p>Capitalize as you would a sentence.</p>
                        </div>
                    </div>
                    <div class="margin_top_40 h1_heading post_article_holder">
                    	<h1>Choose Category</h1>
                        <form>
                        	<div class="triangel_arrow">
                        	<select>
                            	<option>Choose category here</option>
                                <option value="Tag 1">Tag 1</option>
                                <option value="Tag 2">Tag 2</option>
                                <option value="Tag 3">Tag 3</option>
                                <option value="Tag 4">Tag 4</option>
                            </select>
                            </div>
                        </form>
                        <div class="tips_holder">
                        	<p>To import a Word document, simply copy and paste into the editor.</p>
							<p>To insert a video or other embed, simply paste share link in new line and press Enter.</p>
                        </div>
                    </div>
                    <div class="margin_top_40 h1_heading post_article_holder">
                    	<h1>Choose Article Image</h1>
                        <form>
                        	<input id="uploadFile" style="display: none;" type="file">
                            <button type="button" class="upload_file" onclick="document.getElementById('uploadFile').click();"><span>Choose article image</span> <i class="fa fa-picture-o" aria-hidden="true"></i></button>
                        </form>
                        <div class="tips_holder">
                        	<p>Browse and upload your image</p>
                        </div>
                    </div>
                    <div class="margin_top_40 h1_heading post_article_holder">
                    	<h1>Add Tags</h1>
                        <ul class="chep_holder">
                        	<li>Tag Name <span>X</span></li><li>Tag Name <span>X</span></li><li>Tag Name <span>X</span></li>
                        </ul>
                        <div class="tips_holder">
                        	<p>Selcect your relevant tags , If not present add a new tag . The tag will be added as soon as the Article gets approved .</p>
                        </div>
                    </div>
                    <div class="margin_top_40 text-center h1_heading post_article_holder">
                    	<form>
                        	<input type="submit" value="Preview" class="view_full">
                        </form>
                        <div class="tips_holder">
                        	<p>Read carefully your article before Submitting,</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </section>
    
	<?php include"footer.php" ?>