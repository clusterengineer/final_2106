	<?php include("_includes/header.php"); ?>
<?php include("_includes/nav.php"); ?>
	<main>
		<h1>Contact Us</h1>
		
    <section>
        Feel Free to Reach Us, if you have any questions!
        <br>
        <br>
        <form>
      <label for="name">Name</label>
      <br>
      <input type="text" id="name" name="name">
      <br>
      <br>
      <label for="your mail id">Email Address</label>
      <br>
      <input type="email" id="your mail address" name="address">
      <br>
      <br>
      Question
      <br>
			<textarea placeholder="Message" class="postText"></textarea>
			<p class="wordcount"><span class="characters">100</span> characters maximum</p>
			<input onClick="sendForm()" type="submit" value="submit" class="submit">
      </form>
		 </section>
			 </main>
	<?php include("_includes/footer.php"); ?>
