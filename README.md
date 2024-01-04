# Launch Countdown Timer App
This React application provides a countdown timer to a specified launch date. It's designed to showcase the time remaining until the launch and, once the launch has occurred, displays a post launch version of the app.

# Features
Dynamic Countdown: The countdown dynamically updates every second to reflect the time remaining until the launch.

Launch Information: Displays the countdown in terms of days, hours, minutes, and seconds. Also shows the launch date.

Responsive Design: The UI is designed to be responsive and visually appealing on various screen sizes.

Countdown Logic:
The CountDown component utilizes the useEffect and useState hooks to dynamically update the countdown every second. It calculates the time remaining until launch and updates the UI accordingly.

Responsive UI
The UI is designed to be responsive, with a visually appealing layout. The countdown timer is displayed in a grid format, breaking down the days, hours, minutes, and seconds.

Launch Status
Once the launch has occurred, the component switches to a post-launch state, displaying the time elapsed since launch and indicating that the launch has already taken place.
# Live link
https://app-launch-countdown.netlify.app/