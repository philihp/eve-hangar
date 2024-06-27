alter table "evesde"."agtAgentTypes" enable row level security;
create policy "Enable read access for all users" on "evesde"."agtAgentTypes" to public using (true);

alter table "evesde"."agtAgents" enable row level security;
create policy "Enable read access for all users" on "evesde"."agtAgents" to public using (true);

alter table "evesde"."agtAgentsInSpace" enable row level security;
create policy "Enable read access for all users" on "evesde"."agtAgentsInSpace" to public using (true); 

alter table "evesde"."agtResearchAgents" enable row level security;
create policy "Enable read access for all users" on "evesde"."agtResearchAgents" to public using (true);

alter table "evesde"."certCerts" enable row level security;
create policy "Enable read access for all users" on "evesde"."certCerts" to public using (true);

alter table "evesde"."certMasteries" enable row level security;
create policy "Enable read access for all users" on "evesde"."certMasteries" to public using (true);

alter table "evesde"."certSkills" enable row level security;
create policy "Enable read access for all users" on "evesde"."certSkills" to public using (true); 

alter table "evesde"."chrAncestries" enable row level security;
create policy "Enable read access for all users" on "evesde"."chrAncestries" to public using (true);

alter table "evesde"."chrAttributes" enable row level security;
create policy "Enable read access for all users" on "evesde"."chrAttributes" to public using (true);

alter table "evesde"."chrBloodlines" enable row level security;
create policy "Enable read access for all users" on "evesde"."chrBloodlines" to public using (true);

alter table "evesde"."chrFactions" enable row level security;
create policy "Enable read access for all users" on "evesde"."chrFactions" to public using (true);

alter table "evesde"."chrRaces" enable row level security;
create policy "Enable read access for all users" on "evesde"."chrRaces" to public using (true); 

alter table "evesde"."crpActivities" enable row level security;
create policy "Enable read access for all users" on "evesde"."crpActivities" to public using (true);

alter table "evesde"."crpNPCCorporationDivisions" enable row level security;
create policy "Enable read access for all users" on "evesde"."crpNPCCorporationDivisions" to public using (true); 

alter table "evesde"."crpNPCCorporationResearchFields" enable row level security;
create policy "Enable read access for all users" on "evesde"."crpNPCCorporationResearchFields" to public using (true);

alter table "evesde"."crpNPCCorporationTrades" enable row level security;
create policy "Enable read access for all users" on "evesde"."crpNPCCorporationTrades" to public using (true);

alter table "evesde"."crpNPCCorporations" enable row level security;
create policy "Enable read access for all users" on "evesde"."crpNPCCorporations" to public using (true); 

alter table "evesde"."crpNPCDivisions" enable row level security;
create policy "Enable read access for all users" on "evesde"."crpNPCDivisions" to public using (true);

alter table "evesde"."dgmAttributeCategories" enable row level security;
create policy "Enable read access for all users" on "evesde"."dgmAttributeCategories" to public using (true); 

alter table "evesde"."dgmAttributeTypes" enable row level security;
create policy "Enable read access for all users" on "evesde"."dgmAttributeTypes" to public using (true);

alter table "evesde"."dgmEffects" enable row level security;
create policy "Enable read access for all users" on "evesde"."dgmEffects" to public using (true); 

alter table "evesde"."dgmExpressions" enable row level security;
create policy "Enable read access for all users" on "evesde"."dgmExpressions" to public using (true); 

alter table "evesde"."dgmTypeAttributes" enable row level security;
create policy "Enable read access for all users" on "evesde"."dgmTypeAttributes" to public using (true);

alter table "evesde"."dgmTypeEffects" enable row level security;
create policy "Enable read access for all users" on "evesde"."dgmTypeEffects" to public using (true); 

alter table "evesde"."eveGraphics" enable row level security;
create policy "Enable read access for all users" on "evesde"."eveGraphics" to public using (true);

alter table "evesde"."eveIcons" enable row level security;
create policy "Enable read access for all users" on "evesde"."eveIcons" to public using (true); 

alter table "evesde"."eveUnits" enable row level security;
create policy "Enable read access for all users" on "evesde"."eveUnits" to public using (true); 

alter table "evesde"."industryActivity" enable row level security;
create policy "Enable read access for all users" on "evesde"."industryActivity" to public using (true); 

alter table "evesde"."industryActivityMaterials" enable row level security;
create policy "Enable read access for all users" on "evesde"."industryActivityMaterials" to public using (true);

alter table "evesde"."industryActivityProbabilities" enable row level security;
create policy "Enable read access for all users" on "evesde"."industryActivityProbabilities" to public using (true);

alter table "evesde"."industryActivityProducts" enable row level security;
create policy "Enable read access for all users" on "evesde"."industryActivityProducts" to public using (true); 

alter table "evesde"."industryActivityRaces" enable row level security;
create policy "Enable read access for all users" on "evesde"."industryActivityRaces" to public using (true);

alter table "evesde"."industryActivitySkills" enable row level security;
create policy "Enable read access for all users" on "evesde"."industryActivitySkills" to public using (true); 

alter table "evesde"."industryBlueprints" enable row level security;
create policy "Enable read access for all users" on "evesde"."industryBlueprints" to public using (true); 

alter table "evesde"."invCategories" enable row level security;
create policy "Enable read access for all users" on "evesde"."invCategories" to public using (true);

alter table "evesde"."invContrabandTypes" enable row level security;
create policy "Enable read access for all users" on "evesde"."invContrabandTypes" to public using (true); 

alter table "evesde"."invControlTowerResourcePurposes" enable row level security;
create policy "Enable read access for all users" on "evesde"."invControlTowerResourcePurposes" to public using (true);

alter table "evesde"."invControlTowerResources" enable row level security;
create policy "Enable read access for all users" on "evesde"."invControlTowerResources" to public using (true); 

alter table "evesde"."invFlags" enable row level security;
create policy "Enable read access for all users" on "evesde"."invFlags" to public using (true); 

alter table "evesde"."invGroups" enable row level security;
create policy "Enable read access for all users" on "evesde"."invGroups" to public using (true);

alter table "evesde"."invItems" enable row level security;
create policy "Enable read access for all users" on "evesde"."invItems" to public using (true); 

alter table "evesde"."invMarketGroups" enable row level security;
create policy "Enable read access for all users" on "evesde"."invMarketGroups" to public using (true);

alter table "evesde"."invMetaGroups" enable row level security;
create policy "Enable read access for all users" on "evesde"."invMetaGroups" to public using (true);

alter table "evesde"."invMetaTypes" enable row level security;
create policy "Enable read access for all users" on "evesde"."invMetaTypes" to public using (true); 

alter table "evesde"."invNames" enable row level security;
create policy "Enable read access for all users" on "evesde"."invNames" to public using (true); 

alter table "evesde"."invPositions" enable row level security;
create policy "Enable read access for all users" on "evesde"."invPositions" to public using (true); 

alter table "evesde"."invTraits" enable row level security;
create policy "Enable read access for all users" on "evesde"."invTraits" to public using (true);

alter table "evesde"."invTypeMaterials" enable row level security;
create policy "Enable read access for all users" on "evesde"."invTypeMaterials" to public using (true); 

alter table "evesde"."invTypeReactions" enable row level security;
create policy "Enable read access for all users" on "evesde"."invTypeReactions" to public using (true); 

alter table "evesde"."invTypes" enable row level security;
create policy "Enable read access for all users" on "evesde"."invTypes" to public using (true); 

alter table "evesde"."invUniqueNames" enable row level security;
create policy "Enable read access for all users" on "evesde"."invUniqueNames" to public using (true); 

alter table "evesde"."invVolumes" enable row level security;
create policy "Enable read access for all users" on "evesde"."invVolumes" to public using (true); 

alter table "evesde"."mapCelestialGraphics" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapCelestialGraphics" to public using (true); 

alter table "evesde"."mapCelestialStatistics" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapCelestialStatistics" to public using (true); 

alter table "evesde"."mapConstellationJumps" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapConstellationJumps" to public using (true);

alter table "evesde"."mapConstellations" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapConstellations" to public using (true);

alter table "evesde"."mapDenormalize" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapDenormalize" to public using (true); 

alter table "evesde"."mapJumps" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapJumps" to public using (true); 

alter table "evesde"."mapLandmarks" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapLandmarks" to public using (true); 

alter table "evesde"."mapLocationScenes" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapLocationScenes" to public using (true);

alter table "evesde"."mapLocationWormholeClasses" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapLocationWormholeClasses" to public using (true); 

alter table "evesde"."mapRegionJumps" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapRegionJumps" to public using (true); 

alter table "evesde"."mapRegions" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapRegions" to public using (true); 

alter table "evesde"."mapSolarSystemJumps" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapSolarSystemJumps" to public using (true);

alter table "evesde"."mapSolarSystems" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapSolarSystems" to public using (true);

alter table "evesde"."mapUniverse" enable row level security;
create policy "Enable read access for all users" on "evesde"."mapUniverse" to public using (true);

alter table "evesde"."planetSchematics" enable row level security;
create policy "Enable read access for all users" on "evesde"."planetSchematics" to public using (true); 

alter table "evesde"."planetSchematicsPinMap" enable row level security;
create policy "Enable read access for all users" on "evesde"."planetSchematicsPinMap" to public using (true); 

alter table "evesde"."planetSchematicsTypeMap" enable row level security;
create policy "Enable read access for all users" on "evesde"."planetSchematicsTypeMap" to public using (true);

alter table "evesde"."ramActivities" enable row level security;
create policy "Enable read access for all users" on "evesde"."ramActivities" to public using (true);

alter table "evesde"."ramAssemblyLineStations" enable row level security;
create policy "Enable read access for all users" on "evesde"."ramAssemblyLineStations" to public using (true);

alter table "evesde"."ramAssemblyLineTypeDetailPerCategory" enable row level security;
create policy "Enable read access for all users" on "evesde"."ramAssemblyLineTypeDetailPerCategory" to public using (true);

alter table "evesde"."ramAssemblyLineTypeDetailPerGroup" enable row level security;
create policy "Enable read access for all users" on "evesde"."ramAssemblyLineTypeDetailPerGroup" to public using (true);

alter table "evesde"."ramAssemblyLineTypes" enable row level security;
create policy "Enable read access for all users" on "evesde"."ramAssemblyLineTypes" to public using (true); 

alter table "evesde"."ramInstallationTypeContents" enable row level security;
create policy "Enable read access for all users" on "evesde"."ramInstallationTypeContents" to public using (true);

alter table "evesde"."skinLicense" enable row level security;
create policy "Enable read access for all users" on "evesde"."skinLicense" to public using (true);

alter table "evesde"."skinMaterials" enable row level security;
create policy "Enable read access for all users" on "evesde"."skinMaterials" to public using (true);

alter table "evesde"."skinShip" enable row level security;
create policy "Enable read access for all users" on "evesde"."skinShip" to public using (true); 

alter table "evesde"."skins" enable row level security;
create policy "Enable read access for all users" on "evesde"."skins" to public using (true);

alter table "evesde"."staOperationServices" enable row level security;
create policy "Enable read access for all users" on "evesde"."staOperationServices" to public using (true); 

alter table "evesde"."staOperations" enable row level security;
create policy "Enable read access for all users" on "evesde"."staOperations" to public using (true);

alter table "evesde"."staServices" enable row level security;
create policy "Enable read access for all users" on "evesde"."staServices" to public using (true);

alter table "evesde"."staStationTypes" enable row level security;
create policy "Enable read access for all users" on "evesde"."staStationTypes" to public using (true);

alter table "evesde"."staStations" enable row level security;
create policy "Enable read access for all users" on "evesde"."staStations" to public using (true);

alter table "evesde"."translationTables" enable row level security;
create policy "Enable read access for all users" on "evesde"."translationTables" to public using (true);

alter table "evesde"."trnTranslationColumns" enable row level security;
create policy "Enable read access for all users" on "evesde"."trnTranslationColumns" to public using (true);

alter table "evesde"."trnTranslationLanguages" enable row level security;
create policy "Enable read access for all users" on "evesde"."trnTranslationLanguages" to public using (true);

alter table "evesde"."trnTranslations" enable row level security;
create policy "Enable read access for all users" on "evesde"."trnTranslations" to public using (true);

alter table "evesde"."warCombatZoneSystems" enable row level security;
create policy "Enable read access for all users" on "evesde"."warCombatZoneSystems" to public using (true); 

alter table "evesde"."warCombatZones" enable row level security;
create policy "Enable read access for all users" on "evesde"."warCombatZones" to public using (true);
