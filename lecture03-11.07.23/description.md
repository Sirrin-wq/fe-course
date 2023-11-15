Rewrite the code below using semantic tags

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Task 1</title>
    <style>
        html,
        body {
            padding: 0;
            margin: 0;
            outline: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            display: grid;
            grid-template-rows: 80px 1fr 100px;
        }

        .header {
            border-bottom: 1px solid black;
            padding: 8px;
        }

        .content {
            padding: 24px 8px;
        }

        .footer {
            border-top: 1px solid black;
            padding: 8px;
        }
    </style>
</head>

<body>
    <div class="header">
        <span>Task 1</span>
        <div>
            <!-- Feel free to ignore empty href -->
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Chats</a>
        </div>
    </div>
    <div>
        <div class="content">
            <div>HTML: HyperText Markup Language</div>
            <div>HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning
                and
                structure of web content. Other technologies besides HTML are generally used to describe a web page's
                appearance/presentation (CSS) or functionality/behavior (JavaScript).</div>
            <div>"Hypertext" refers to links that connect web pages to one another, either within a single website or
                between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and
                linking it to pages created by other people, you become an active participant in the World Wide Web.
            </div>
            <div>An HTML element is set off from other text in a document by "tags", which consist of the element name
                surrounded by &lt;" and "&gt;". The name of an element inside a tag is case-insensitive. That is, it can
                be
                written in uppercase, lowercase, or a mixture. For example, the &lt;title&gt; tag can be written as
                &lt;Title&gt;, &lt;TITLE&gt;, or in any other way. However, the convention and recommended practice is
                to
                write tags in lowercase.</div>
        </div>
    </div>
    <div class="footer">
        <div>
            <!-- Feel free to ignore empty href -->
            <a href="#">Website Privacy Notice</a>
            <a href="#">Cookies</a>
            <a href="#">Legal</a>
            <a href="#">Community Participation Guidelines</a>
        </div>
    </div>
</body>

</html>
```