import z from "zod";

export const AppData = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  socials: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
      url: z.string(),
    })
  ),
  experiences: z.array(
    z.object({
      position: z.string(),
      company: z.string(),
      period: z.string(),
      current: z.boolean(),
    })
  ),
  skills: z.array(
    z.object({
      categoryName: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          image: z.string(),
        })
      ),
    })
  ),
});

export type AppData = z.infer<typeof AppData>;
