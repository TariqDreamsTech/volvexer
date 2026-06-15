import { TEAM } from '../data/site';

function TeamSection() {
    return (
        <section className="section team" id="team">
            <div className="container">
                <div className="section-head">
                    <span className="section-head__eyebrow">Meet the team</span>
                    <h2 className="section-head__title">The people behind Volvexer</h2>
                    <p className="section-head__sub">
                        A small, dedicated team obsessed with getting your numbers right.
                    </p>
                </div>

                <div className="team__grid">
                    {TEAM.map((member) => (
                        <article className="team-card" key={member.name}>
                            <div className="team-card__avatar" aria-hidden="true">
                                {member.initials}
                            </div>
                            <h3 className="team-card__name">{member.name}</h3>
                            <p className="team-card__role">{member.role}</p>
                            <p className="team-card__bio">{member.bio}</p>
                            {member.linkedin ? (
                                <a
                                    className="team-card__linkedin"
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${member.name} on LinkedIn`}
                                >
                                    <i className="fab fa-linkedin-in" aria-hidden="true"></i> LinkedIn
                                </a>
                            ) : (
                                <span className="team-card__linkedin team-card__linkedin--static">
                                    <i className="fab fa-linkedin-in" aria-hidden="true"></i> LinkedIn
                                </span>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
