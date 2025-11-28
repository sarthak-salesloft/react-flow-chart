export const chartData = {
  offset: {
    x: 0,
    y: 0,
  },
  scale: 1,
  nodes: {
    node1: {
      id: 'node1',
      type: 'Dana',
      position: {
        x: 300,
        y: 100,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'output',
          properties: {
            value: 'yes',
            linkColor: 'green',
          },
        },
        port2: {
          id: 'port2',
          type: 'output',
          properties: {
            value: 'no',
          },
        },
      },
    },
    node2: {
      id: 'node2',
      type: 'Petra',
      position: {
        x: 300,
        y: 300,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
          properties: {
            value: 'yes',
          },
        },
        port2: {
          id: 'port2',
          type: 'output',
        },
      },
    },
    node3: {
      id: 'node3',
      type: 'Daniel',
      position: {
        x: 100,
        y: 500,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
        },
      },
    },
    node4: {
      id: 'node4',
      type: 'Sean',
      position: {
        x: 600,
        y: 300,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
        },
        port2: {
          id: 'port2',
          type: 'output',
        },
      },
    },
    node5: {
      id: 'node5',
      type: 'Lisa',
      position: {
        x: 400,
        y: 500,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
        },
      },
    },
    node6: {
      id: 'node6',
      type: 'Adam',
      position: {
        x: 700,
        y: 500,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
          properties: {
            value: 'yes',
            linkColor: 'green',
          },
        },
      },
    },
  },
  links: {
    link1: {
      id: 'link1',
      from: {
        nodeId: 'node1',
        portId: 'port1',
      },
      to: {
        nodeId: 'node2',
        portId: 'port1',
      },
    },
    link2: {
      id: 'link2',
      from: {
        nodeId: 'node2',
        portId: 'port2',
      },
      to: {
        nodeId: 'node3',
        portId: 'port1',
      },
    },
    link3: {
      id: 'link3',
      from: {
        nodeId: 'node1',
        portId: 'port2',
      },
      to: {
        nodeId: 'node4',
        portId: 'port1',
      },
    },
    link4: {
      id: 'link4',
      from: {
        nodeId: 'node2',
        portId: 'port2',
      },
      to: {
        nodeId: 'node5',
        portId: 'port1',
      },
    },
    link5: {
      id: 'link5',
      from: {
        nodeId: 'node6',
        portId: 'port1',
      },
      to: {
        nodeId: 'node2',
        portId: 'port2',
      },
    },
  },
  selected: {},
  hovered: {},
};