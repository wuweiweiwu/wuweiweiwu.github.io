var _ID_CHAT_TYPE_TEST_TAKER_TO_MODERATOR = 2;
var _ID_CHAT_TYPE_MODERATOR_TO_TEST_TAKER = 1;
var _ID_CHAT_TYPE_ERROR_MESSAGE	= 3;

var _ID_CHAT_CLASS_MODERATOR = "isModerator";
var _ID_CHAT_CLASS_TEST_TAKER = "isCandidate";
var _ID_CHAT_CLASS_ERROR_MESSAGE	=	"isError";

var _ID_CHAT_NAME_USER_MODERATOR    = "Moderator";
var _ID_CHAT_NAME_USER_TEST_TAKER   = "Me";

	//chat sent message status
var _ID_CHAT_MESSAGE_SENT		=	"Sent";
var _ID_CHAT_MESSAGE_SENDING	=	"Sending...";
	//chat message sent error
var _ID_ERROR_MESSAGE_SURVIELLANCE_WINDOW_NOT_FOUND	=	"Unable to connect";
var _ID_ERROR_MESSAGE_CONNECTION_NOT_ESTABLISHED	=	"Unable to connect";

var _ID_CHAT_MESSAGE_SENT_STATUS_DELIVERED	=	 1;
var _ID_CHAT_MESSAGE_SENT_STATUS_NOT_DELIVERED	=	 2;
var _ID_CHAT_MESSAGE_SENT_STATUS_SENDING =	3;

var _ID_CHAT_SENT_STATUS_MESSAGE_TIMEOUT	=	5000;
//For test window or for client

var _ID_CHAT_WINDOW_VISIBILITY_STATUS_CLOSED                            = 1;
var _ID_CHAT_WINDOW_VISIBILITY_STATUS_OPEN                              = 2;
var _ID_CHAT_WINDOW_VISIBILITY_STATUS_MINIMISED                         = 3;

$(document).ready(function(){
		//window minimise code
    $('.spanChatHeaderTextWrapper').click(function(){
			//single chat specific
        //$('.divChatBoxBody').toggle();
		//$('.divChatBoxText').toggle();
			//generalise solution
		$('.divChatBoxHeader').next().toggle().next().next().toggle();
                updateChatWindowStatus();
	
    });
		//close chat window on click event 
    $('.spanChatClose').click(closeChatWindow);
		
		//send chat message 
    $('.btnChatSend').click(function(e){
        msg    =   $('#inpChatText').val().trim();
        //$('#inpChatText').val('');
			//disable chat window
		
        if(msg != "")
        {
            if((typeof(window.survillanceWindow)!='undefined'))
            {
                disableChatWindow();
                showChatSentStatus( _ID_CHAT_MESSAGE_SENT_STATUS_SENDING , _ID_CHAT_MESSAGE_SENDING	);
                window.survillanceWindow.sendChatMessage(msg);
            }else
            {
                //unable to connect
                showChatSentStatus( _ID_CHAT_MESSAGE_SENT_STATUS_NOT_DELIVERED ,_ID_ERROR_MESSAGE_SURVIELLANCE_WINDOW_NOT_FOUND	);
            }
        }
    });
		//on click window body , move focus to input area
    $('.divChatBoxBody').click(function(){
       $( "#inpChatText" ).focus();
    });
		//disable input area on message sent
});


function openChatBox()
{
    
    $('#chatBoxWindow').show();
    if($("#divChatBoxBody").is(":visible") == false)
    {
        $(".spanChatHeaderTextWrapper" ).trigger( "click" );
    }
    updateChatWindowStatus();
}

function closeChatWindow()
{
    $('#chatBoxWindow').hide();
    updateChatWindowStatus();
}
function clearPreviousChat()
{
    $( ".visible" ).remove();
}
function openMinimisedChatWindow()
{
    $('#chatBoxWindow').show();
    if($("#divChatBoxBody").is(":visible") == true)
    {
        $(".spanChatHeaderTextWrapper" ).trigger( "click" );
    }
    updateChatWindowStatus();
}
function addNewMessage( userType,message , showStatus  )
{
    if(userType == _ID_CHAT_TYPE_TEST_TAKER_TO_MODERATOR)
    {
        userClass   = _ID_CHAT_CLASS_TEST_TAKER;
        name        = _ID_CHAT_NAME_USER_TEST_TAKER;
        if(showStatus == true)
        showChatSentStatus(_ID_CHAT_MESSAGE_SENT_STATUS_DELIVERED,_ID_CHAT_MESSAGE_SENT);
    }
    else if(userType == _ID_CHAT_TYPE_MODERATOR_TO_TEST_TAKER)
    {
        userClass   = _ID_CHAT_CLASS_MODERATOR;
        name        = _ID_CHAT_NAME_USER_MODERATOR;
    }
	else
    {
        alert("type undefined");
    }

    var newMessage =   "<div class='divMsg visible "+userClass+"'><span class='spanMsgSender'>"+name+"</span><span class='spanMsgSeperator'> : </span><span class='spanMsgText'>"+message+"</span></div>";
    $('.divChatBoxBody').append(newMessage);
}
	//Disable chat window
function disableChatWindow()
{
        
        $(".btnChatSend").attr('disabled', 'disabled');
	$("#inpChatText").attr('disabled', 'disabled');
        $(".btnChatSend").removeClass('enable').addClass('disabled');
}
	//enable chat window
function enableChatWindow()
{
	$(".btnChatSend").removeAttr('disabled');
	$("#inpChatText").removeAttr('disabled');
        $(".btnChatSend").removeClass('disabled').addClass('enable');
}

function showChatSentStatus(status,msg)
{
	switch(status)
	{
		case _ID_CHAT_MESSAGE_SENT_STATUS_DELIVERED :
			$('#inpChatText').val('');
                        enableChatWindow(  );
			break;
		case _ID_CHAT_MESSAGE_SENT_STATUS_NOT_DELIVERED :
                        enableChatWindow(  );
			break;
		case _ID_CHAT_MESSAGE_SENT_STATUS_SENDING :
			break;
	}
	$(".spanChatSentStatusText").text(msg).show().fadeOut(_ID_CHAT_SENT_STATUS_MESSAGE_TIMEOUT);
        
}
function updateChatWindowStatus( )
{
    if((typeof(window.survillanceWindow)!='undefined'))
    {
        var chatWindowVisibilty         =   $("#chatBoxWindow").is(":visible");
        var chatWindowBodyVisibility    =   $("#divChatBoxBody").is(":visible");
        if(chatWindowVisibilty == true)
        {
            if(chatWindowBodyVisibility == true)
            {
                window.survillanceWindow.changeChatWindowOpenClosedStatus(   _ID_CHAT_WINDOW_VISIBILITY_STATUS_OPEN  );
            }
            else
            {
                window.survillanceWindow.changeChatWindowOpenClosedStatus(   _ID_CHAT_WINDOW_VISIBILITY_STATUS_MINIMISED  );
            }
        }
        else
        {
            window.survillanceWindow.changeChatWindowOpenClosedStatus(   _ID_CHAT_WINDOW_VISIBILITY_STATUS_CLOSED  );
        }
    }

}