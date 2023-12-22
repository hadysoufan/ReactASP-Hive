using Application.Comments;
using MediatR;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    /// <summary>
    /// Represents a SignalR hub for real-time chat functionality.
    /// </summary>
    public class ChatHub : Hub
    {
        private readonly IMediator _mediator;

        /// <summary>
        /// Initializes a new instance of the <see cref="ChatHub"/> class.
        /// </summary>
        /// <param name="mediator">The mediator for handling communication between components.</param>
        public ChatHub(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Sends a comment and broadcasts it to the corresponding group.
        /// </summary>
        /// <param name="command">The command to create a new comment.</param>
        public async Task SendComment(CommentCreate.Command command)
        {
            var comment = await _mediator.Send(command);

            await Clients.Group(command.ActivityId.ToString())
                .SendAsync("ReceiveComment", comment.Value);
        }

        /// <summary>
        /// Handles actions to be taken when a client is connected to the hub.
        /// </summary>
        public override async Task OnConnectedAsync()
        {
            var httpContext = Context.GetHttpContext();
            var activityId = httpContext.Request.Query["activityId"];
            await Groups.AddToGroupAsync(Context.ConnectionId, activityId);
            var result = await _mediator.Send(new CommentList.Query { ActivityId = Guid.Parse(activityId) });

            await Clients.Caller.SendAsync("LoadComments", result.Value);
        }
    }
}
