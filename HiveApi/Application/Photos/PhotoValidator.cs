using Domain.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Photos
{
    public class PhotoValidator : AbstractValidator<Photo>
    {

        public PhotoValidator()
        {
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}
