alter table "sde"."agtAgentTypes" enable row level security;
create policy "Enable read access for all users" on "sde"."agtAgentTypes" to public using (true);

alter table "sde"."agtAgents" enable row level security;
create policy "Enable read access for all users" on "sde"."agtAgents" to public using (true);

alter table "sde"."agtAgentsInSpace" enable row level security;
create policy "Enable read access for all users" on "sde"."agtAgentsInSpace" to public using (true); 

alter table "sde"."agtResearchAgents" enable row level security;
create policy "Enable read access for all users" on "sde"."agtResearchAgents" to public using (true);

alter table "sde"."certCerts" enable row level security;
create policy "Enable read access for all users" on "sde"."certCerts" to public using (true);

alter table "sde"."certMasteries" enable row level security;
create policy "Enable read access for all users" on "sde"."certMasteries" to public using (true);

alter table "sde"."certSkills" enable row level security;
create policy "Enable read access for all users" on "sde"."certSkills" to public using (true); 

alter table "sde"."chrAncestries" enable row level security;
create policy "Enable read access for all users" on "sde"."chrAncestries" to public using (true);

alter table "sde"."chrAttributes" enable row level security;
create policy "Enable read access for all users" on "sde"."chrAttributes" to public using (true);

alter table "sde"."chrBloodlines" enable row level security;
create policy "Enable read access for all users" on "sde"."chrBloodlines" to public using (true);

alter table "sde"."chrFactions" enable row level security;
create policy "Enable read access for all users" on "sde"."chrFactions" to public using (true);

alter table "sde"."chrRaces" enable row level security;
create policy "Enable read access for all users" on "sde"."chrRaces" to public using (true); 

alter table "sde"."crpActivities" enable row level security;
create policy "Enable read access for all users" on "sde"."crpActivities" to public using (true);

alter table "sde"."crpNPCCorporationDivisions" enable row level security;
create policy "Enable read access for all users" on "sde"."crpNPCCorporationDivisions" to public using (true); 

alter table "sde"."crpNPCCorporationResearchFields" enable row level security;
create policy "Enable read access for all users" on "sde"."crpNPCCorporationResearchFields" to public using (true);

alter table "sde"."crpNPCCorporationTrades" enable row level security;
create policy "Enable read access for all users" on "sde"."crpNPCCorporationTrades" to public using (true);

alter table "sde"."crpNPCCorporations" enable row level security;
create policy "Enable read access for all users" on "sde"."crpNPCCorporations" to public using (true); 

alter table "sde"."crpNPCDivisions" enable row level security;
create policy "Enable read access for all users" on "sde"."crpNPCDivisions" to public using (true);

alter table "sde"."dgmAttributeCategories" enable row level security;
create policy "Enable read access for all users" on "sde"."dgmAttributeCategories" to public using (true); 

alter table "sde"."dgmAttributeTypes" enable row level security;
create policy "Enable read access for all users" on "sde"."dgmAttributeTypes" to public using (true);

alter table "sde"."dgmEffects" enable row level security;
create policy "Enable read access for all users" on "sde"."dgmEffects" to public using (true); 

alter table "sde"."dgmExpressions" enable row level security;
create policy "Enable read access for all users" on "sde"."dgmExpressions" to public using (true); 

alter table "sde"."dgmTypeAttributes" enable row level security;
create policy "Enable read access for all users" on "sde"."dgmTypeAttributes" to public using (true);

alter table "sde"."dgmTypeEffects" enable row level security;
create policy "Enable read access for all users" on "sde"."dgmTypeEffects" to public using (true); 

alter table "sde"."eveGraphics" enable row level security;
create policy "Enable read access for all users" on "sde"."eveGraphics" to public using (true);

alter table "sde"."eveIcons" enable row level security;
create policy "Enable read access for all users" on "sde"."eveIcons" to public using (true); 

alter table "sde"."eveUnits" enable row level security;
create policy "Enable read access for all users" on "sde"."eveUnits" to public using (true); 

alter table "sde"."industryActivity" enable row level security;
create policy "Enable read access for all users" on "sde"."industryActivity" to public using (true); 

alter table "sde"."industryActivityMaterials" enable row level security;
create policy "Enable read access for all users" on "sde"."industryActivityMaterials" to public using (true);

alter table "sde"."industryActivityProbabilities" enable row level security;
create policy "Enable read access for all users" on "sde"."industryActivityProbabilities" to public using (true);

alter table "sde"."industryActivityProducts" enable row level security;
create policy "Enable read access for all users" on "sde"."industryActivityProducts" to public using (true); 

alter table "sde"."industryActivityRaces" enable row level security;
create policy "Enable read access for all users" on "sde"."industryActivityRaces" to public using (true);

alter table "sde"."industryActivitySkills" enable row level security;
create policy "Enable read access for all users" on "sde"."industryActivitySkills" to public using (true); 

alter table "sde"."industryBlueprints" enable row level security;
create policy "Enable read access for all users" on "sde"."industryBlueprints" to public using (true); 

alter table "sde"."invCategories" enable row level security;
create policy "Enable read access for all users" on "sde"."invCategories" to public using (true);

alter table "sde"."invContrabandTypes" enable row level security;
create policy "Enable read access for all users" on "sde"."invContrabandTypes" to public using (true); 

alter table "sde"."invControlTowerResourcePurposes" enable row level security;
create policy "Enable read access for all users" on "sde"."invControlTowerResourcePurposes" to public using (true);

alter table "sde"."invControlTowerResources" enable row level security;
create policy "Enable read access for all users" on "sde"."invControlTowerResources" to public using (true); 

alter table "sde"."invFlags" enable row level security;
create policy "Enable read access for all users" on "sde"."invFlags" to public using (true); 

alter table "sde"."invGroups" enable row level security;
create policy "Enable read access for all users" on "sde"."invGroups" to public using (true);

alter table "sde"."invItems" enable row level security;
create policy "Enable read access for all users" on "sde"."invItems" to public using (true); 

alter table "sde"."invMarketGroups" enable row level security;
create policy "Enable read access for all users" on "sde"."invMarketGroups" to public using (true);

alter table "sde"."invMetaGroups" enable row level security;
create policy "Enable read access for all users" on "sde"."invMetaGroups" to public using (true);

alter table "sde"."invMetaTypes" enable row level security;
create policy "Enable read access for all users" on "sde"."invMetaTypes" to public using (true); 

alter table "sde"."invNames" enable row level security;
create policy "Enable read access for all users" on "sde"."invNames" to public using (true); 

alter table "sde"."invPositions" enable row level security;
create policy "Enable read access for all users" on "sde"."invPositions" to public using (true); 

alter table "sde"."invTraits" enable row level security;
create policy "Enable read access for all users" on "sde"."invTraits" to public using (true);

alter table "sde"."invTypeMaterials" enable row level security;
create policy "Enable read access for all users" on "sde"."invTypeMaterials" to public using (true); 

alter table "sde"."invTypeReactions" enable row level security;
create policy "Enable read access for all users" on "sde"."invTypeReactions" to public using (true); 

alter table "sde"."invTypes" enable row level security;
create policy "Enable read access for all users" on "sde"."invTypes" to public using (true); 

alter table "sde"."invUniqueNames" enable row level security;
create policy "Enable read access for all users" on "sde"."invUniqueNames" to public using (true); 

alter table "sde"."invVolumes" enable row level security;
create policy "Enable read access for all users" on "sde"."invVolumes" to public using (true); 

alter table "sde"."mapCelestialGraphics" enable row level security;
create policy "Enable read access for all users" on "sde"."mapCelestialGraphics" to public using (true); 

alter table "sde"."mapCelestialStatistics" enable row level security;
create policy "Enable read access for all users" on "sde"."mapCelestialStatistics" to public using (true); 

alter table "sde"."mapConstellationJumps" enable row level security;
create policy "Enable read access for all users" on "sde"."mapConstellationJumps" to public using (true);

alter table "sde"."mapConstellations" enable row level security;
create policy "Enable read access for all users" on "sde"."mapConstellations" to public using (true);

alter table "sde"."mapDenormalize" enable row level security;
create policy "Enable read access for all users" on "sde"."mapDenormalize" to public using (true); 

alter table "sde"."mapJumps" enable row level security;
create policy "Enable read access for all users" on "sde"."mapJumps" to public using (true); 

alter table "sde"."mapLandmarks" enable row level security;
create policy "Enable read access for all users" on "sde"."mapLandmarks" to public using (true); 

alter table "sde"."mapLocationScenes" enable row level security;
create policy "Enable read access for all users" on "sde"."mapLocationScenes" to public using (true);

alter table "sde"."mapLocationWormholeClasses" enable row level security;
create policy "Enable read access for all users" on "sde"."mapLocationWormholeClasses" to public using (true); 

alter table "sde"."mapRegionJumps" enable row level security;
create policy "Enable read access for all users" on "sde"."mapRegionJumps" to public using (true); 

alter table "sde"."mapRegions" enable row level security;
create policy "Enable read access for all users" on "sde"."mapRegions" to public using (true); 

alter table "sde"."mapSolarSystemJumps" enable row level security;
create policy "Enable read access for all users" on "sde"."mapSolarSystemJumps" to public using (true);

alter table "sde"."mapSolarSystems" enable row level security;
create policy "Enable read access for all users" on "sde"."mapSolarSystems" to public using (true);

alter table "sde"."mapUniverse" enable row level security;
create policy "Enable read access for all users" on "sde"."mapUniverse" to public using (true);

alter table "sde"."planetSchematics" enable row level security;
create policy "Enable read access for all users" on "sde"."planetSchematics" to public using (true); 

alter table "sde"."planetSchematicsPinMap" enable row level security;
create policy "Enable read access for all users" on "sde"."planetSchematicsPinMap" to public using (true); 

alter table "sde"."planetSchematicsTypeMap" enable row level security;
create policy "Enable read access for all users" on "sde"."planetSchematicsTypeMap" to public using (true);

alter table "sde"."ramActivities" enable row level security;
create policy "Enable read access for all users" on "sde"."ramActivities" to public using (true);

alter table "sde"."ramAssemblyLineStations" enable row level security;
create policy "Enable read access for all users" on "sde"."ramAssemblyLineStations" to public using (true);

alter table "sde"."ramAssemblyLineTypeDetailPerCategory" enable row level security;
create policy "Enable read access for all users" on "sde"."ramAssemblyLineTypeDetailPerCategory" to public using (true);

alter table "sde"."ramAssemblyLineTypeDetailPerGroup" enable row level security;
create policy "Enable read access for all users" on "sde"."ramAssemblyLineTypeDetailPerGroup" to public using (true);

alter table "sde"."ramAssemblyLineTypes" enable row level security;
create policy "Enable read access for all users" on "sde"."ramAssemblyLineTypes" to public using (true); 

alter table "sde"."ramInstallationTypeContents" enable row level security;
create policy "Enable read access for all users" on "sde"."ramInstallationTypeContents" to public using (true);

alter table "sde"."skinLicense" enable row level security;
create policy "Enable read access for all users" on "sde"."skinLicense" to public using (true);

alter table "sde"."skinMaterials" enable row level security;
create policy "Enable read access for all users" on "sde"."skinMaterials" to public using (true);

alter table "sde"."skinShip" enable row level security;
create policy "Enable read access for all users" on "sde"."skinShip" to public using (true); 

alter table "sde"."skins" enable row level security;
create policy "Enable read access for all users" on "sde"."skins" to public using (true);

alter table "sde"."staOperationServices" enable row level security;
create policy "Enable read access for all users" on "sde"."staOperationServices" to public using (true); 

alter table "sde"."staOperations" enable row level security;
create policy "Enable read access for all users" on "sde"."staOperations" to public using (true);

alter table "sde"."staServices" enable row level security;
create policy "Enable read access for all users" on "sde"."staServices" to public using (true);

alter table "sde"."staStationTypes" enable row level security;
create policy "Enable read access for all users" on "sde"."staStationTypes" to public using (true);

alter table "sde"."staStations" enable row level security;
create policy "Enable read access for all users" on "sde"."staStations" to public using (true);

alter table "sde"."translationTables" enable row level security;
create policy "Enable read access for all users" on "sde"."translationTables" to public using (true);

alter table "sde"."trnTranslationColumns" enable row level security;
create policy "Enable read access for all users" on "sde"."trnTranslationColumns" to public using (true);

alter table "sde"."trnTranslationLanguages" enable row level security;
create policy "Enable read access for all users" on "sde"."trnTranslationLanguages" to public using (true);

alter table "sde"."trnTranslations" enable row level security;
create policy "Enable read access for all users" on "sde"."trnTranslations" to public using (true);

alter table "sde"."warCombatZoneSystems" enable row level security;
create policy "Enable read access for all users" on "sde"."warCombatZoneSystems" to public using (true); 

alter table "sde"."warCombatZones" enable row level security;
create policy "Enable read access for all users" on "sde"."warCombatZones" to public using (true);
