const input = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 11 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 2: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 14 clay. Each geode robot costs 3 ore and 16 obsidian.
Blueprint 3: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 4: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 15 clay. Each geode robot costs 2 ore and 8 obsidian.
Blueprint 5: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 18 obsidian.
Blueprint 6: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 7: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 6 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 8: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 10 clay. Each geode robot costs 4 ore and 10 obsidian.
Blueprint 9: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 15 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 10: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 4 ore and 12 obsidian.
Blueprint 11: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 3 ore and 17 obsidian.
Blueprint 12: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 13: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 4 ore and 17 obsidian.
Blueprint 14: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 4 ore and 9 obsidian.
Blueprint 15: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 16: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 4 ore and 9 obsidian.
Blueprint 17: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 18: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 19: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 18 clay. Each geode robot costs 2 ore and 19 obsidian.
Blueprint 20: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 4 ore and 8 obsidian.
Blueprint 21: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 9 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 22: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 3 ore and 12 obsidian.
Blueprint 23: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 3 ore and 19 obsidian.
Blueprint 24: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 16 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 25: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 9 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 26: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 12 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 27: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 3 ore and 19 obsidian.
Blueprint 28: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 30: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 13 clay. Each geode robot costs 2 ore and 20 obsidian.`;

const exampleinput = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`;

const blueprints = exampleinput
  .split(/\n/g)
  .map(l => l
    .replace(/ ?Each | robot/g,'') // remove Each and robot
    .split(':') // split between Blueprint n and rest of text
    .map((v, i) => 
      // turn rest of text into object where 
      //  each key is robot type 
      //  value is object where 
      //   key is mineral type
      //   value is required amount
      i == 0 ? v : v.split('.').filter(v => v.trim().length > 0).reduce((p, v) => { 
        let o = {}; 
        let i = v.split(' costs ');
        console.log(i);
        p[i[0]] = i[1].split(' and ').reduce((p,v) => {
          let i = v.split(' ');
          p[i[1]] = parseInt(i[0]);
          return p;
        }, {});
        return p;
      }, {})
    )
  )
  .map(v => ({blueprint: parseInt(v[0].replace('Blueprint ', '')), robots: v[1]}))
  ;
console.log(JSON.stringify(blueprints));

const can_build_robot = (type, blueprint, resources, consider_future = false) => {
  const requirements = blueprint.robots[type];
  console.log(type, 'requirements: ', blueprint.robots[type], Object.keys(blueprint.robots[type]));
  // loop thru requirements
  let yes = true;
  let maybe = true;
  Object.keys(requirements).forEach((v) => {
    console.log('resources ' + v + '=', resources[v], '>=', 'requirement ' + v + '=', requirements[v])
    yes = yes && resources[v] >= requirements[v];
    maybe = maybe && resources[v] >= (requirements[v]/2);
  });
  console.log('available: yes=', yes, 'maybe=', maybe);
  return [yes, maybe];
}

const which_robot_to_build = (blueprint, resources, robot_resources, limits) => {
  const robots = Object.keys(blueprint.robots);
  let robot_to_build = null;
  for (let i = robots.length - 1; i >= 0; i--) {
  // for (let i = 0; i < robots.length; i++) {
    let [yes, maybe] = can_build_robot(robots[i], blueprint, resources);
    let cur_robot = robot_resources.find(r => r.type == robots[i]);
    let reached_limit = false;
    if (limits[robots[i]] != undefined) {
      reached_limit = limits[robots[i]] != undefined && cur_robot.units >= limits[robots[i]];
    }
    console.log(robots[i], 'limit of', limits[robots[i]] ?? 'none', reached_limit ? 'has been reached' : 'has not been reached');
    if (yes || maybe) {
      // console.log('Decided to build a', robots[i], 'robot');
      return yes && !reached_limit ? robots[i] : null; // immediately exit if maybe
    }

    // if (yes && !reached_limit) {
    //   console.log('Decided to build a', robots[i], 'robot');
    //   robot_to_build = robots[i]; // immediately exit if maybe
    // }
    // else if (maybe && !reached_limit) {
    //   console.log('Maybe build', robots[i], 'in future minute');
    //   robot_to_build = null;
    //   break;
    // }
  }
  return robot_to_build;
}

const build_a_robot = (type, blueprint, resources) => {
  // console.log('Building', type, 'robot');
  const requirements = blueprint.robots[type];
  const spent = Object.keys(requirements).map((v) => {
    // deduct requirement from resources
    resources[v] -= requirements[v];
    return requirements[v] + ' ' + v;
  });
  return spent;
}

const run_for = (blueprint, limits, total_minutes) => {
  // Initialize robots, ore gets 1 unit initial
  const robots = Object.keys(blueprints[0].robots).map(robot => ({type: robot, units: robot == 'ore' ? 1 : 0}));
  // Initialize resources
  const resources = {ore: 0, clay: 0, obsidian: 0, geode: 0};
  console.log("\n");
  console.log('Initial robots:', JSON.stringify(robots));
  console.log('Initial resources:', resources);
  console.log("\n");
  for (let minute = 1; minute <= total_minutes; minute++) {
    console.log('== Minute', minute, '==');
    // determine next robot to build
    let robot_to_build = which_robot_to_build(blueprint, resources, robots, limits);
    if (robot_to_build != null) {
      let cost = build_a_robot(robot_to_build, blueprint, resources, robots);
      console.log('Spent', cost.join(', '), 'to start building a', robot_to_build, 'robot');
    }
    // robots mine resource
    robots.forEach(r => {
      if (r.units == 0) return;
      resources[r.type] += 1 * r.units;
      console.log(r.units, r.type, 'robot collects', r.units, r.type, 'which totals to', resources[r.type], r.type);
    });
    // finish building robot
    if (robot_to_build != null) {
      let robot = robots.find(r => r.type == robot_to_build);
      // console.log('Finish building', robot, 'robot');
      robot.units++;
      console.log('The new', robot_to_build, 'robot is ready; you now have', robot.units, robot.type, 'robot');
    }
    console.log('After Minute', minute, "\n"+' - available resources is now', resources, "\n" + ' - robots', JSON.stringify(robots));
    console.log("\n");
  }
  return resources['geode'];
};

const limits = {obsidian: 2};
let geodes = run_for(blueprints[0], limits, 24);
console.log(geodes);