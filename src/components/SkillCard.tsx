import { Card } from "./Card";

export const SkillCard = ({ skill }) => (
  <Card className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-teal-100 dark:bg-teal-500/10 rounded-lg group-hover:bg-teal-200 dark:group-hover:bg-teal-500/20 transition-colors">
          <skill.icon className="text-teal-600 dark:text-teal-400" size={20} />
        </div>
        <span className="font-bold text-slate-800 dark:text-slate-200">{skill.name}</span>
      </div>
      <span className="text-xs font-mono text-teal-600 dark:text-teal-500">{skill.level}%</span>
    </div>
    <div className="h-2 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </Card>
);