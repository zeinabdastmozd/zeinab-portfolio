export default function Projects() {
  return (
    <section className="section">

      <h2>Top Research Projects</h2>

      <div className="cards">

        <div className="card">
          <h3>
            LLM Cultural Differences
          </h3>

          <p>
            Research investigating whether
            large language models adapt to
            cultural differences in chatbot
            interactions.
          </p>
        </div>

        <div className="card">
          <h3>
            EEG Mental Workload Classification
          </h3>

          <p>
            Deep learning and neural-network
            approaches for classifying mental
            workload from EEG signals.
          </p>
        </div>

        <div className="card">
          <h3>
            AI Conversational Research
          </h3>

          <p>
            Persona-driven conversational
            systems and synthetic data
            generation using LLMs.
          </p>
        </div>

      </div>

    </section>
  );
}