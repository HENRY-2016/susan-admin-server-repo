

let greetingsarry =     [
                            " Hi Susan,,, thank you for the chance you have given to me... ",
                            " to entertian you somehow with your loved song from ...",
                            " ***** Lewis Capaldi called ***** ",
                            " ==> Someone You Loved ",
                            " Click in lets begin and we sing together",
                            " Thank You........."
                        ]

let songlyricsarry =    [
                            " I'm going under and this time I fear there's no one to save me",
                            " This all or nothing really got a way of driving me crazy",
                            " I need somebody to heal",
                            " Somebody to know",
                            " Somebody to have",
                            " Somebody to hold",
                            " It's easy to say",
                            " But it's never the same",
                            " I guess I kinda liked the way you numbed all the pain",


                            " Now the day bleeds",
                            " Into nightfall",
                            " And you're not here",
                            " To get me through it all",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved",


                            " I'm going under and this time I fear there's no one to turn to",
                            " This all or nothing way of loving got me sleeping without you",
                            " Now, I need somebody to know",
                            " Somebody to heal",
                            " Somebody to have",
                            " Just to know how it feels",
                            " It's easy to say but it's never the same",
                            " I guess I kinda liked the way you helped me escape",


                            " Now the day bleeds",
                            " Into nightfall",
                            " And you're not here",
                            " To get me through it all",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved",


                            " And I tend to close my eyes when it hurts sometimes",
                            " I fall into your arms",
                            " I'll be safe in your sound 'til I come back around",


                            " For now the day bleeds",
                            " Into nightfall",
                            " And you're not here",
                            " To get me through it all",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved",


                            " But now the day bleeds",
                            " Into nightfall",
                            " And you're not here",
                            " To get me through it all",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved",
                            " I let my guard down",
                            " And then you pulled the rug",
                            " I was getting kinda used to being someone you loved eeeee",

                        ]

function StartTypingGreetingText ()
{
    if ($(".greeting-text").length == 1) 
    { 
        let typed = new Typed(".greeting-text", { 
            strings:greetingsarry,
            typeSpeed: 50, 
            loop: true, 
            backDelay: 1000, 
            backSpeed: 30, 
        }); 
    }
} 

function StartTypingLyricsText ()
{
    if ($(".text-slider").length == 1) 
    { 
        let typed = new Typed(".text-slider", { 
            strings:songlyricsarry,
            typeSpeed: 50, 
            loop: true, 
            backDelay: 1000, 
            backSpeed: 25, 
        }); 
    }
} 
