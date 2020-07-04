

// Radial Menu sub version
renderRadialAnswerText(level:number, name: string, title:string){

  if (level <= this.state.dataProfil.level){
    return (
      <View style={styles.radialAnswerChoiceText}
      onSelect={this.handlePressList(level, name,title)}>
      <Text style={[{color:Colors.snow,fontSize:12}]}>
            {title}
      </Text>
      </View>
    )
  }
  return (
    <View style={[styles.radialAnswerChoiceText]}
          onSelect={this.handlePressList(level, name,title)}>
    <Text style={[{color:Colors.snow,fontSize:12}]}>
          ????????
    </Text>
    </View>
  )

}

renderRadialMainText(level: number, isOpen: bool){

  var radiustyle =  (level % 2) == 0 ? {borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30} : {borderTopRightRadius: 30,
          borderBottomRightRadius: 30}

  if (level <= this.state.dataProfil.level){
    return (
      <View style={[styles.radialAnswerMainText,radiustyle]}>
          <Text style={[{color:Colors.snow,fontSize:12}]}>
            { isOpen == true ? "Glisser" : "Niveau " +level}
          </Text>
      </View>)
  }
  return (
    <View style={[styles.radialAnswerMainText,radiustyle]}>
        <Icon name='lock'
              size={15}
              color={Colors.snow}>
          </Icon>
        </View>)
}

renderListRadialMenu(rowData: Array<Object>){
return (rowData.map((cell, i) => {

  if ((i % 2) == 0  && i <= rowData.length / 2)
  {
      var niveau = i +1
      var niveauSup = i + 2
      var isFisrt = (niveau == 1)
      var currentLevel = this.state.dataProfil.level
      var isOpen = false
      return (
        <View key={i} style={styles.radialAnswerMainView}>
        <View  style={[styles.radialAnswerView,
            {justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }]}>
            <RadialAnswer onOpen={() => {}}
                  onClose={() => {isOpen = true}}
                  itemRadius={45}
                  menuRadius= {120}
                  spreadAngle={isFisrt ? 30 : 50}
                  startAngle= {isFisrt ? 180: 155}>
                {this.renderRadialMainText(niveau, isOpen)}
                {this.renderRadialAnswerText(niveau,rowData[niveau-1].name,rowData[niveau-1].title)}
                {this.renderRadialAnswerText(niveau,rowData[niveau].name,rowData[niveau].title)}
                </RadialAnswer>
            </View>
          <View style={[styles.radialAnswerView, {justifyContent: 'flex-start',alignItems: 'flex-start',}]}>
          <RadialAnswer onOpen={() => {}}
                onClose={() => {}}
                itemRadius={45}
                menuRadius= {120}
                spreadAngle={isFisrt ? 330 : 310}
                startAngle= {isFisrt ? 0 : 25}
                >
                {this.renderRadialMainText(niveauSup)}
                {this.renderRadialAnswerText(niveauSup,rowData[niveauSup].name,rowData[niveauSup].title)}
                {this.renderRadialAnswerText(niveauSup,rowData[niveauSup + 1].name,rowData[niveauSup + 1].title)}

            </RadialAnswer>
        </View>
        </View>)
   } else
   return ;

  }))
}
