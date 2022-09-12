import WorkflowCard from './WorkflowCard';

const Workflows = () => (
  <div className="grid gap-24 md:max-w-full mx-3 md:mx-8">
    <WorkflowCard
      badge="Geo-spatial"
      title="See where the next big event is. How far it is. When to get there."
      description="GPS kinda sucks. Simply because you can't see the where, when, and who of each event. Bump will make your event attending experience 200% better."
      image="https://media.discordapp.net/attachments/1004476178880544778/1018766026059550730/event.png?width=272&height=567"
    />
    <WorkflowCard
      badge="Go Out There"
      title="Let event attendees see the real you!"
      description="Going to a founder or investor meetup? Let fellow attendees see who you are! Going to a movie night? Let the host know you're coming!"
      image="https://media.discordapp.net/attachments/1004476178880544778/1018771937071214602/bump-profile.png?width=280&height=567"
    />
    <WorkflowCard
      badge="Organized"
      title="Personal Secretary"
      description="You aren't the president, so you don't get a secretary right? WRONG. Bump is there is organize every IRL event you go to. Who's going. What to expect. Google Calendar is cringe."
      image="https://media.discordapp.net/attachments/1004476178880544778/1018771969535131668/bump-attending.png?width=280&height=567"
    />
  </div>
);

export default Workflows;
