
import { render, screen, fireEvent } from "@testing-library/svelte";
import { expect, describe, test } from "vitest";
import ProjectCard from "components/projects/project-card.svelte";


// AboutMe.svelte test, checking for greeting header content

describe("Renders about me component", () => {
  test("Shows content", () => {
    const oneProject = {
      id: "8a808c0f214fcaca441646d2bf82f75e67df5f1790a2721287f74255e8df0cc06",
      name: "Tomato Dream",
      link: "https://www.tomatodream.store",
      technologies: "SvelteKit, Tailwind, Vercel, Typescript, Firebase, Lucia-auth, Prisma, Redis, Stripe Api",
      created: "2023",
      description: `It is shopping website featuring selling of tomatoes, it is fully responsive website with auth and payment system.`
    }

    render(ProjectCard, oneProject);

    expect(screen.getByText("Tomato Dream")).toBeInTheDocument();
  });
});
