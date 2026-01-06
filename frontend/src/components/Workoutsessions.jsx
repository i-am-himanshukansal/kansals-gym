import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session" id="workout_session">
      <div className="wrapper">
        <h1>High-Impact Workout Sessions</h1>
        <p>
          Our expertly designed workout sessions focus on building strength,
          improving endurance, and enhancing mobility. Each session is crafted
          to help you stay consistent, push your limits, and achieve visible
          results with confidence.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>Featured Fitness Bootcamps</h1>
        <p>
          Experience high-energy bootcamps led by certified trainers that blend
          intense workouts with group motivation. Whether your goal is weight
          loss, muscle gain, or overall fitness, our bootcamps are designed to
          deliver maximum performance and lasting results.
        </p>

        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning</h4>
            <p>Build power, stamina, and total-body strength</p>
          </div>

          <div>
            <h4>HIIT Training</h4>
            <p>Burn calories fast with high-intensity intervals</p>
          </div>

          <div>
            <h4>Functional Fitness</h4>
            <p>Improve movement, balance, and everyday performance</p>
          </div>

          <div>
            <h4>Body Transformation</h4>
            <p>Reshape your body with focused training plans</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
