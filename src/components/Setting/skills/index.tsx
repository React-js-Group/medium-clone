import { useRef, useState, FC } from 'react'

import styles from './styles.module.scss'

interface SkillsProps {
  onSkills: (skill: string) => void
  onDelete: (id: number) => void
  skills: {}[]
}

const Skills: FC<SkillsProps> = ({
  onSkills,
  skills,
  onDelete,
}): JSX.Element => {
  const [skill, setSkill] = useState<string>('')
  const inputRef = useRef(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Space' && skill.length > 0) {
      inputRef.current.value = ''
      setSkill('')
      if (skill !== undefined) {
        onSkills(skill)
      }
    }
  }

  return (
    <div className={styles.container}>
      <label>مهارت ها</label>
      <input
        type="text"
        placeholder="javascript,react"
        onKeyDown={handleKeyDown}
        onChange={(e) => setSkill(e.target.value)}
        ref={inputRef}
      />
      <div>
        {skills.map(({ skill, id }: any) => (
          <span
            key={id}
            onClick={(e) => onDelete(id)}
            style={{ display: skill ? 'inline' : 'none' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills
