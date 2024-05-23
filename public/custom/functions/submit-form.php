<?php

class Telegram
{
    private $apiToken = "6460666114:AAFFmHAFDxZxouY5U7we0jY0EU6Um0S6Shg";
    private $chatId = "1699758722";

    public function getMessageNumber($name, $phone)
    {
        $message = "Перезвоните\nИмя: $name\nНомер телефона: $phone";

        $url = "https://api.telegram.org/bot$this->apiToken/sendMessage";

        $data = http_build_query([
            'chat_id' => $this->chatId,
            'text' => $message,
        ]);

        $options = [
            'http' => [
                'method' => 'POST',
                'header' => 'Content-Type: application/x-www-form-urlencoded',
                'content' => $data,
            ],
        ];

        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
    }
}

if (!empty($_POST)) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $telegram = new Telegram;

    $telegram->getMessageNumber($name, $phone);
}
