alter table "public"."agtAgentTypes" enable row level security;
create policy "Enable read access for all users" on "public"."agtAgentTypes" to public using (true);

alter table "public"."agtAgents" enable row level security;
create policy "Enable read access for all users" on "public"."agtAgents" to public using (true);

alter table "public"."agtAgentsInSpace" enable row level security;
create policy "Enable read access for all users" on "public"."agtAgentsInSpace" to public using (true); 

alter table "public"."agtResearchAgents" enable row level security;
create policy "Enable read access for all users" on "public"."agtResearchAgents" to public using (true);

alter table "public"."certCerts" enable row level security;
create policy "Enable read access for all users" on "public"."certCerts" to public using (true);

alter table "public"."certMasteries" enable row level security;
create policy "Enable read access for all users" on "public"."certMasteries" to public using (true);

alter table "public"."certSkills" enable row level security;
create policy "Enable read access for all users" on "public"."certSkills" to public using (true); 

alter table "public"."chrAncestries" enable row level security;
create policy "Enable read access for all users" on "public"."chrAncestries" to public using (true);

alter table "public"."chrAttributes" enable row level security;
create policy "Enable read access for all users" on "public"."chrAttributes" to public using (true);

alter table "public"."chrBloodlines" enable row level security;
create policy "Enable read access for all users" on "public"."chrBloodlines" to public using (true);

alter table "public"."chrFactions" enable row level security;
create policy "Enable read access for all users" on "public"."chrFactions" to public using (true);

alter table "public"."chrRaces" enable row level security;
create policy "Enable read access for all users" on "public"."chrRaces" to public using (true); 

alter table "public"."crpActivities" enable row level security;
create policy "Enable read access for all users" on "public"."crpActivities" to public using (true);

alter table "public"."crpNPCCorporationDivisions" enable row level security;
create policy "Enable read access for all users" on "public"."crpNPCCorporationDivisions" to public using (true); 

alter table "public"."crpNPCCorporationResearchFields" enable row level security;
create policy "Enable read access for all users" on "public"."crpNPCCorporationResearchFields" to public using (true);

alter table "public"."crpNPCCorporationTrades" enable row level security;
create policy "Enable read access for all users" on "public"."crpNPCCorporationTrades" to public using (true);

alter table "public"."crpNPCCorporations" enable row level security;
create policy "Enable read access for all users" on "public"."crpNPCCorporations" to public using (true); 

alter table "public"."crpNPCDivisions" enable row level security;
create policy "Enable read access for all users" on "public"."crpNPCDivisions" to public using (true);

alter table "public"."dgmAttributeCategories" enable row level security;
create policy "Enable read access for all users" on "public"."dgmAttributeCategories" to public using (true); 

alter table "public"."dgmAttributeTypes" enable row level security;
create policy "Enable read access for all users" on "public"."dgmAttributeTypes" to public using (true);

alter table "public"."dgmEffects" enable row level security;
create policy "Enable read access for all users" on "public"."dgmEffects" to public using (true); 

alter table "public"."dgmExpressions" enable row level security;
create policy "Enable read access for all users" on "public"."dgmExpressions" to public using (true); 

alter table "public"."dgmTypeAttributes" enable row level security;
create policy "Enable read access for all users" on "public"."dgmTypeAttributes" to public using (true);

alter table "public"."dgmTypeEffects" enable row level security;
create policy "Enable read access for all users" on "public"."dgmTypeEffects" to public using (true); 

alter table "public"."eveGraphics" enable row level security;
create policy "Enable read access for all users" on "public"."eveGraphics" to public using (true);

alter table "public"."eveIcons" enable row level security;
create policy "Enable read access for all users" on "public"."eveIcons" to public using (true); 

alter table "public"."eveUnits" enable row level security;
create policy "Enable read access for all users" on "public"."eveUnits" to public using (true); 

alter table "public"."industryActivity" enable row level security;
create policy "Enable read access for all users" on "public"."industryActivity" to public using (true); 

alter table "public"."industryActivityMaterials" enable row level security;
create policy "Enable read access for all users" on "public"."industryActivityMaterials" to public using (true);

alter table "public"."industryActivityProbabilities" enable row level security;
create policy "Enable read access for all users" on "public"."industryActivityProbabilities" to public using (true);

alter table "public"."industryActivityProducts" enable row level security;
create policy "Enable read access for all users" on "public"."industryActivityProducts" to public using (true); 

alter table "public"."industryActivityRaces" enable row level security;
create policy "Enable read access for all users" on "public"."industryActivityRaces" to public using (true);

alter table "public"."industryActivitySkills" enable row level security;
create policy "Enable read access for all users" on "public"."industryActivitySkills" to public using (true); 

alter table "public"."industryBlueprints" enable row level security;
create policy "Enable read access for all users" on "public"."industryBlueprints" to public using (true); 

alter table "public"."invCategories" enable row level security;
create policy "Enable read access for all users" on "public"."invCategories" to public using (true);

alter table "public"."invContrabandTypes" enable row level security;
create policy "Enable read access for all users" on "public"."invContrabandTypes" to public using (true); 

alter table "public"."invControlTowerResourcePurposes" enable row level security;
create policy "Enable read access for all users" on "public"."invControlTowerResourcePurposes" to public using (true);

alter table "public"."invControlTowerResources" enable row level security;
create policy "Enable read access for all users" on "public"."invControlTowerResources" to public using (true); 

alter table "public"."invFlags" enable row level security;
create policy "Enable read access for all users" on "public"."invFlags" to public using (true); 

alter table "public"."invGroups" enable row level security;
create policy "Enable read access for all users" on "public"."invGroups" to public using (true);

alter table "public"."invItems" enable row level security;
create policy "Enable read access for all users" on "public"."invItems" to public using (true); 

alter table "public"."invMarketGroups" enable row level security;
create policy "Enable read access for all users" on "public"."invMarketGroups" to public using (true);

alter table "public"."invMetaGroups" enable row level security;
create policy "Enable read access for all users" on "public"."invMetaGroups" to public using (true);

alter table "public"."invMetaTypes" enable row level security;
create policy "Enable read access for all users" on "public"."invMetaTypes" to public using (true); 

alter table "public"."invNames" enable row level security;
create policy "Enable read access for all users" on "public"."invNames" to public using (true); 

alter table "public"."invPositions" enable row level security;
create policy "Enable read access for all users" on "public"."invPositions" to public using (true); 

alter table "public"."invTraits" enable row level security;
create policy "Enable read access for all users" on "public"."invTraits" to public using (true);

alter table "public"."invTypeMaterials" enable row level security;
create policy "Enable read access for all users" on "public"."invTypeMaterials" to public using (true); 

alter table "public"."invTypeReactions" enable row level security;
create policy "Enable read access for all users" on "public"."invTypeReactions" to public using (true); 

alter table "public"."invTypes" enable row level security;
create policy "Enable read access for all users" on "public"."invTypes" to public using (true); 

alter table "public"."invUniqueNames" enable row level security;
create policy "Enable read access for all users" on "public"."invUniqueNames" to public using (true); 

alter table "public"."invVolumes" enable row level security;
create policy "Enable read access for all users" on "public"."invVolumes" to public using (true); 

alter table "public"."mapCelestialGraphics" enable row level security;
create policy "Enable read access for all users" on "public"."mapCelestialGraphics" to public using (true); 

alter table "public"."mapCelestialStatistics" enable row level security;
create policy "Enable read access for all users" on "public"."mapCelestialStatistics" to public using (true); 

alter table "public"."mapConstellationJumps" enable row level security;
create policy "Enable read access for all users" on "public"."mapConstellationJumps" to public using (true);

alter table "public"."mapConstellations" enable row level security;
create policy "Enable read access for all users" on "public"."mapConstellations" to public using (true);

alter table "public"."mapDenormalize" enable row level security;
create policy "Enable read access for all users" on "public"."mapDenormalize" to public using (true); 

alter table "public"."mapJumps" enable row level security;
create policy "Enable read access for all users" on "public"."mapJumps" to public using (true); 

alter table "public"."mapLandmarks" enable row level security;
create policy "Enable read access for all users" on "public"."mapLandmarks" to public using (true); 

alter table "public"."mapLocationScenes" enable row level security;
create policy "Enable read access for all users" on "public"."mapLocationScenes" to public using (true);

alter table "public"."mapLocationWormholeClasses" enable row level security;
create policy "Enable read access for all users" on "public"."mapLocationWormholeClasses" to public using (true); 

alter table "public"."mapRegionJumps" enable row level security;
create policy "Enable read access for all users" on "public"."mapRegionJumps" to public using (true); 

alter table "public"."mapRegions" enable row level security;
create policy "Enable read access for all users" on "public"."mapRegions" to public using (true); 

alter table "public"."mapSolarSystemJumps" enable row level security;
create policy "Enable read access for all users" on "public"."mapSolarSystemJumps" to public using (true);

alter table "public"."mapSolarSystems" enable row level security;
create policy "Enable read access for all users" on "public"."mapSolarSystems" to public using (true);

alter table "public"."mapUniverse" enable row level security;
create policy "Enable read access for all users" on "public"."mapUniverse" to public using (true);

alter table "public"."planetSchematics" enable row level security;
create policy "Enable read access for all users" on "public"."planetSchematics" to public using (true); 

alter table "public"."planetSchematicsPinMap" enable row level security;
create policy "Enable read access for all users" on "public"."planetSchematicsPinMap" to public using (true); 

alter table "public"."planetSchematicsTypeMap" enable row level security;
create policy "Enable read access for all users" on "public"."planetSchematicsTypeMap" to public using (true);

alter table "public"."ramActivities" enable row level security;
create policy "Enable read access for all users" on "public"."ramActivities" to public using (true);

alter table "public"."ramAssemblyLineStations" enable row level security;
create policy "Enable read access for all users" on "public"."ramAssemblyLineStations" to public using (true);

alter table "public"."ramAssemblyLineTypeDetailPerCategory" enable row level security;
create policy "Enable read access for all users" on "public"."ramAssemblyLineTypeDetailPerCategory" to public using (true);

alter table "public"."ramAssemblyLineTypeDetailPerGroup" enable row level security;
create policy "Enable read access for all users" on "public"."ramAssemblyLineTypeDetailPerGroup" to public using (true);

alter table "public"."ramAssemblyLineTypes" enable row level security;
create policy "Enable read access for all users" on "public"."ramAssemblyLineTypes" to public using (true); 

alter table "public"."ramInstallationTypeContents" enable row level security;
create policy "Enable read access for all users" on "public"."ramInstallationTypeContents" to public using (true);

alter table "public"."skinLicense" enable row level security;
create policy "Enable read access for all users" on "public"."skinLicense" to public using (true);

alter table "public"."skinMaterials" enable row level security;
create policy "Enable read access for all users" on "public"."skinMaterials" to public using (true);

alter table "public"."skinShip" enable row level security;
create policy "Enable read access for all users" on "public"."skinShip" to public using (true); 

alter table "public"."skins" enable row level security;
create policy "Enable read access for all users" on "public"."skins" to public using (true);

alter table "public"."staOperationServices" enable row level security;
create policy "Enable read access for all users" on "public"."staOperationServices" to public using (true); 

alter table "public"."staOperations" enable row level security;
create policy "Enable read access for all users" on "public"."staOperations" to public using (true);

alter table "public"."staServices" enable row level security;
create policy "Enable read access for all users" on "public"."staServices" to public using (true);

alter table "public"."staStationTypes" enable row level security;
create policy "Enable read access for all users" on "public"."staStationTypes" to public using (true);

alter table "public"."staStations" enable row level security;
create policy "Enable read access for all users" on "public"."staStations" to public using (true);

alter table "public"."translationTables" enable row level security;
create policy "Enable read access for all users" on "public"."translationTables" to public using (true);

alter table "public"."trnTranslationColumns" enable row level security;
create policy "Enable read access for all users" on "public"."trnTranslationColumns" to public using (true);

alter table "public"."trnTranslationLanguages" enable row level security;
create policy "Enable read access for all users" on "public"."trnTranslationLanguages" to public using (true);

alter table "public"."trnTranslations" enable row level security;
create policy "Enable read access for all users" on "public"."trnTranslations" to public using (true);

alter table "public"."warCombatZoneSystems" enable row level security;
create policy "Enable read access for all users" on "public"."warCombatZoneSystems" to public using (true); 

alter table "public"."warCombatZones" enable row level security;
create policy "Enable read access for all users" on "public"."warCombatZones" to public using (true);
