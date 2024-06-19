function skillsMember() {
  return {
    skills: ['React', 'Redux', 'Node', 'Express', 'MongoDB', 'Elasticsearch', 'Docker', 'Kubernetes'],
    addSkill(skill) {
      this.skills.push(skill);
    },
    removeSkill(skill) {
      this.skills = this.skills.filter(s => s !== skill);
    }
  };
}