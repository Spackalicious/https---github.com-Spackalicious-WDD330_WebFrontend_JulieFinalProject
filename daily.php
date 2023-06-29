<!DOCTYPE html>
<html lang="en-us">
<head>
<title>Homeschool Momma's Helper | Daily Lists</title>
    <meta name="Daily Lists page: Homeschooling Helper with Julie Spackman" content="Julie Spackman shares tools for homeschooling">
    
    <?php include 'common/head.php';?>
    <style>
        .daily {background-color: white; font-weight: bold;}
    </style>
</head>

<body>
    <?php include 'common/header.php';?>     
    <?php include 'common/nav.php';?>  

    <section>              
        <div class="daily-section">
            <h3>Daily Lists</h3>
            <ul class="main-controls">
                <li id="addList">add list</li>
                <li id="checkAll">check all</li>
                <li id="uncheckAll">uncheck all</li>
            </ul>

    <div id="buttons">        
        <!-- <input type="button" id="changeColors" value="Change Color Scheme"> -->
        <input type="button" id="clearLists" value="Clear All & Restart">
        <!-- <input type="button" id="newPic" value="Get a New Nature Photo"> -->
    </div>

    <div class="list-columns">   
        <!-- This is where lists will appear from JS -->
    </div>

    </div>
    </section>

    <?php include 'common/footer.php';?>
</body>
</html>