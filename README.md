# BCIT SSD Web Site Specifications

## About the Site

- The web site will be used by both current students and prospective students considering taking the program
- The site should promote the SSD program to prospective students
- For prospective students the site should provide the following information:
  - Program submission requirements
  - Program intake dates
  - Program lengths
  - Program campus location
  - How to apply for the program
  - (Optional) Any required software or equipment (if any)
    - Software, Computer requirements
- For current students, the site should provide course information such as:
  - Program overview
  - A program schedule calendar
  - Instructor information
  - Fellow student’s information
  - (Optional) Server and Software Requirement information
  - E-Resources
- For prospective students and current students
  - Provide a summary for each major course in the program
    - You can get this information from each course’s course outline

## The Web Site Pages

The web site must include at a minimum the following pages (page descriptions to follow)

- Welcome or home page
- Schedule page
- Students page
- Staff page
- E-Resources page
- Individual Courses summary page
- A Contact Page

## Individual Page Requirements

### Welcome or Home Page

- This program should sell the program to prospective students
- An introductory marketing blurb bestowing the benefits of taking the SSD program (This can be lorem ipsum)
- Overview of the program

### Schedule Page

- The page should list out each weekday of the program and on each day of the program the course that is happening on that day and the instructor for the course
- This page should be laid out in a calendar view with the ability to toggle to a list view.
  - These two views should be toggleable with a button (you will probably need a bit of JavaScript for this)
- This schedule page should be responsive, if the user is in Calendar view or list view on desktop, the view should switch to a general mobile view on phones, for easier readability
- I recommend removing the “List View / Calendar View” button on mobile
- The current day (if it is between Monday and Friday) should be highlighted
- Inside the “ssd-web-site-files” folder I have included an Excel spreadsheet of the SSD schedule. This excel spreadsheet may not be an exact match to your real schedule, but use this spreadsheet as the basis for this schedule page
- Feel free to use JavaScript or PHP to create this schedule, or hand coding in HTML is fine as well
- You will probably need JavaScript to handle the toggling of the schedule views

### Students Page

- This page should list out each student currently enrolled in the program with the following information:
  - The students preferred name
  - The students “my.bcit.ca” email address
  - Optional:
    - Include links to the students:
      - LinkedIn account
      - GitHub account
      - Other social media
      - Personal Web Site (if any)
      - For the purposes of this project, you can make fake links to nowhere for these if you want to include them
- In the “ssd-web-site-files” folder I have included a spreadsheet with made-up “fake” students. Feel free to use that or you can use your fellow classmates info.

### Staff Page

- Faculty:
  - This section should list out each instructor in the program with the following information:
    - The instructors preferred name
    - The instructors official or preferred contact email address
    - The courses the instructor teaches in
    - Optional
      - Any social media links
      - Profile picture
- Administration
  - List out any administrative staff that help with the program

### E-Resources Page

- Provide an organized (by category) of helpful links to online web resources (blogs, technical resources (MDN), etc…) or links to useful free web and software development software (text editors, images editors, etc) that you feel would be helpful to current and future students in the SSD program
- Provide a minimum of 8 resources
- Optional (but nice to have)
  - Provide a summary paragraph description of what each link is
  - A screen shot or logo of the web site or product

### Courses Overview Page

- Brief descriptions of each of the major courses for the program. The descriptions can be written
with Lorem Ipsum

### Contact Page

- Direct users to the appropriate links to where they can apply to the SSD program on BCIT’s web site
- Contact Form with the following inputs:
  - First name (required)
  - Last name (required)
  - Email (required)
  - Telephone (optional)
  - Radio button group with the following options
    - Current Student
    - Prospective Student
    - Instructor
  - Text area input (required)
- The contact form should be validated before submission
  - First name must have a value (can not be blank)
  - Last name must have a value (can not be blank)
  - Email must have a value and be a valid email address
  - Text area input must have a value (can not be blank)
- When the user submits the form and the form is valid you can either:
  - Display a pop-up displaying a message similar to:
    - “Thank You, [User’s First Name]. We have received your information and will contact you shortly.”
  - Take them to a separate HTML page and display a similar message as listed above
- *Backend form processing is not required for this project*