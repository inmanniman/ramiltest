<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />

    <title>Выкуп авто ДОРОГО</title>
    <link rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/assets/css/app.css" />
    <script defer src="/assets/js/app.js?v=27"></script>
</head>

<body>
    <?php
    require_once("custom/header.php");
    ?>
    <main>
        <?php
        require_once("custom/block/buy-any-car.php");
        require_once("custom/block/what-me.php");
        require_once("custom/block/what-cars.php");
        require_once("custom/block/stages-sale.php");
        require_once("custom/block/crash-car.php");
        require_once("custom/block/feedback.php");
        require_once("custom/block/callback-btn.php");
        echo "<section class='modal-window'>";
        require_once("custom/block/modal-window.php");
        echo "</section>";
        ?>
    </main>
    <?php require_once("custom/footer.php"); ?>
</body>

</html>