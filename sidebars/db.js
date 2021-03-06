module.exports = {
  sidebarDB: {
    "Modèle de données": ['introduction'],
    "Modèles": [
      'models/event',
      'models/activity',
      'models/task',
      'models/specialty', 
      'models/team',
      'models/user',
      { 
        "Equipements": 
        [ 
          'models/equipmentType',
          'models/equipment'
        ]
      },
      {
        "Créneaux" :
        [
          'models/shiftCategory',
          'models/shift'
        ]
      },
      'models/location',
      'models/comment',
      'models/notification'
    ],
  }
}