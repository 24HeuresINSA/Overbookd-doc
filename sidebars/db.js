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
          'models/equipment_type',
          'models/equipment'
        ]
      },
      {
        "Créneaux" :
        [
          'models/shift_category',
          'models/shift'
        ]
      },
      'models/location',
      'models/comment',
      'models/notification'
    ],
  }
}