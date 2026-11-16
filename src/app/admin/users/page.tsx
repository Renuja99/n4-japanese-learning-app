import { prisma } from "@/lib/prisma";
import { setRole } from "../actions";
import { Flash, PageHeader, Panel } from "../ui";

export default async function AdminUsers({ searchParams }: { searchParams: Promise<{ msg?: string }> }) {
  const { msg } = await searchParams;
  const users = await prisma.profile.findMany({
    orderBy: { xp: "desc" },
    include: { _count: { select: { progress: true, bookmarks: true } } },
  });
  return (
    <>
      <PageHeader title="Learners" sub={`${users.length} accounts`} />
      <Flash msg={msg} />
      <Panel>
        <div className="-mx-2 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-xs tracking-wide text-muted uppercase">
              <tr>
                <th className="px-2 py-2">Learner</th>
                <th className="px-2 py-2 text-center">XP</th>
                <th className="px-2 py-2 text-center">Streak</th>
                <th className="px-2 py-2 text-center">Lessons</th>
                <th className="px-2 py-2 text-center">Saved</th>
                <th className="px-2 py-2">Last active</th>
                <th className="px-2 py-2">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {users.map((u) => (
                <tr key={u.id}>
                  <td className="px-2 py-3">
                    <b>{u.displayName}</b>
                    <span className="block text-xs text-muted">{u.email}</span>
                  </td>
                  <td className="px-2 py-3 text-center">{u.xp}</td>
                  <td className="px-2 py-3 text-center">{u.streak}</td>
                  <td className="px-2 py-3 text-center">{u._count.progress}</td>
                  <td className="px-2 py-3 text-center">{u._count.bookmarks}</td>
                  <td className="px-2 py-3">{u.lastActiveOn?.toISOString().slice(0, 10) ?? "—"}</td>
                  <td className="px-2 py-3">
                    <form action={setRole.bind(null, u.id, u.role === "ADMIN" ? "LEARNER" : "ADMIN")}>
                      <button className={`chip py-1 text-xs ${u.role === "ADMIN" ? "bg-ink text-white" : "bg-canvas"}`}>
                        {u.role === "ADMIN" ? "Admin" : "Learner"}
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}
